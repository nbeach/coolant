import {Build, BuildStatus} from "../component"
import {periodicallyWithState} from "./time"
import {Provider} from "../component/Connector"
import {ObjectMap, toObjectMap} from "../util/ObjectMap"

export const onNewBuild = (provider: Provider<ReadonlyArray<Build>>, action: (priorBuild: Build, currentBuild: Build) => void) => {
    periodicallyWithState(async (priorRetrievedBuild: ObjectMap<Build>) => {
        const builds = await provider()

        builds
            .filter(build => build.status !== BuildStatus.Running)
            .map(build => ({ currentBuild: build, priorBuild: priorRetrievedBuild[build.id] }))
            .filter(({ priorBuild}) => priorBuild !== undefined)
            .filter(({currentBuild, priorBuild}) => priorBuild?.number !== currentBuild.number)
            .forEach(({currentBuild, priorBuild}) => action(priorBuild, currentBuild))

        return {...priorRetrievedBuild, ...toObjectMap(builds, build => build.id)}
    }, {})}


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


