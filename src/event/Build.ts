import {periodicallyWithState} from "./Time"
import {ObjectMap, toObjectMap} from "../util/ObjectMap"
import {Build, BuildStatus} from "../model"
import {Provider} from ".."

export const onNewBuild = (provider: Provider<readonly Build[]>, action: (priorBuild: Build, currentBuild: Build) => void, updateIntervalSeconds?: number) => {
    periodicallyWithState(async (priorRetrievedBuild: ObjectMap<Build>) => {
        const builds = await provider()
        const nonRunningBuilds = builds.filter(build => build.status !== BuildStatus.Running)

        nonRunningBuilds
            .filter(build => build.status !== BuildStatus.Running)
            .map(build => ({ currentBuild: build, priorBuild: priorRetrievedBuild[build.id] }))
            .filter(({ priorBuild}) => priorBuild !== undefined)
            .filter(({currentBuild, priorBuild}) => priorBuild?.number !== currentBuild.number)
            .forEach(({currentBuild, priorBuild}) => action(priorBuild, currentBuild))

        return {...priorRetrievedBuild, ...toObjectMap(nonRunningBuilds, build => build.id)}
    }, {}, updateIntervalSeconds)}


export const buildPassed = (currentBuild: Build): boolean => {
    return currentBuild.status === BuildStatus.Passed
}

export const buildNowPassing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Failed && currentBuild.status === BuildStatus.Passed
}

export const buildStillPassing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Passed && currentBuild.status === BuildStatus.Passed
}

export const buildFailed = (currentBuild: Build): boolean => {
    return currentBuild.status === BuildStatus.Failed
}

export const buildNowFailing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Passed && currentBuild.status === BuildStatus.Failed
}

export const buildStillFailing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Failed && currentBuild.status === BuildStatus.Failed
}


