import {PullRequestListPresenter} from "./PullRequestList"
import {storiesOf} from "@storybook/react"
import React from "react"
import {PullRequest, PullRequestStatus} from "../../model/PullRequest"

const pullRequests: readonly PullRequest[] = [
    { id: "1", name: "Lorem ipsum",             timeOpened: "2019-08-05T12:00:00Z", approvals: 3, commenters: ["john.doe"], status: PullRequestStatus.UnderReview },
    { id: "2", name: "Dolor sit amet",          timeOpened: "2019-08-05T12:00:00Z", approvals: 3, commenters: [], status: PullRequestStatus.ReadyToMerge  },
    { id: "3", name: "Quis nostrud",            timeOpened: "2019-08-01T00:00:00Z", approvals: 2, commenters: ["abe.lincoln", "john.doe"], status: PullRequestStatus.UnderReview  },
    { id: "4", name: "Consectetur adipiscing",  timeOpened: "2019-08-01T00:00:00Z", approvals: 0, commenters: [], status: PullRequestStatus.New  },
    { id: "5", name: "Duis aute irure",         timeOpened: "2019-08-01T00:00:00Z", approvals: 1, commenters: ["martha.stewart"], status: PullRequestStatus.UnderReview  },
    { id: "6", name: "Non proident",            timeOpened: "2019-08-01T00:00:00Z", approvals: 3, commenters: [], status: PullRequestStatus.UnderReview  },
    { id: "7", name: "Excepteur sint",          timeOpened: "2019-08-01T00:00:00Z", approvals: 4, commenters: [], status: PullRequestStatus.ReadyToMerge  },
    { id: "8", name: "Officia deserunt",        timeOpened: "2019-08-05T00:00:00Z", approvals: 0, commenters: [], status: PullRequestStatus.New  },
]

storiesOf("PullRequestList", module)
    .add("many pull requests", () => <PullRequestListPresenter pullRequests={pullRequests}/>)
    .add("no pull requests", () => <PullRequestListPresenter pullRequests={[]}/>)
