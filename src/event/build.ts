import {Build, BuildStatus} from "../component"
import {periodicallyWithState} from "./time"
import {Provider} from "../component/Connector"
import {ObjectMap, toObjectMap} from "../util/ObjectMap"

export const onBuildStatusChange = (provider: Provider<ReadonlyArray<Build>>, action: (priorBuild: Build, currentBuild: Build) => void) => {
    periodicallyWithState(async (priorBuilds: ObjectMap<Build>) => {
        const builds = await provider()

        builds
            .filter(build => build.status !== BuildStatus.Running)
            .forEach(currentBuild => {
            const priorBuild = priorBuilds[currentBuild.id]
            if (buildStatusChanged(priorBuild, currentBuild)) {
                action(priorBuild, currentBuild)
            }
        })

        return {...priorBuilds, ...toObjectMap(builds, build => build.id)}
    }, {})
}
const buildStatusChanged = (priorBuild: Build | undefined, currentBuild: Build): boolean => {
    return priorBuild !== undefined ? priorBuild.status !== currentBuild.status : false
}

export const buildNowPassing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Failed && currentBuild.status === BuildStatus.Passed
}

export const buildNowFailing = (priorBuild: Build, currentBuild: Build): boolean => {
    return priorBuild.status === BuildStatus.Passed && currentBuild.status === BuildStatus.Failed
}


