
export interface Build {
    readonly id: string
    readonly name: string
    readonly status: BuildStatus
}

export enum BuildStatus {
    Passed = "Passing",
    Running = "Running",
    Failed = "Failed",
}
