export interface PullRequest {
    readonly id: string,
    readonly name: string,
    readonly approvals: number,
    readonly timeOpened: string,
    readonly commenters: readonly string[]
    readonly status: PullRequestStatus
}

export enum PullRequestStatus {
    New,
    ReadyToMerge,
    UnderReview,
}

