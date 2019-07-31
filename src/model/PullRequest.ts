export interface PullRequest {
    readonly name: string,
    readonly approvals: number,
    readonly timeOpened: string,
    readonly commenters: readonly string[]
}
