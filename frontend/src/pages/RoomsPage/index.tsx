import { useLazyLoadQuery } from "react-relay"
import { graphql } from "babel-plugin-relay/macro"
import { RoomsPageQuery } from "./__generated__/RoomsPageQuery.graphql"

import { Grid, Paper } from "@mui/material"

import RoomList from "./RoomList"
import { Outlet } from "react-router"
import { Suspense } from "react"

const RoomsPage = () => {
  const queryData = useLazyLoadQuery<RoomsPageQuery>(
    graphql`
      query RoomsPageQuery {
        ...RoomList_query
      }
    `,
    {}
  )

  return (
    <Grid container
      style={{
        height: 'calc(100vh - 64px)',
      }}
    >
      <Grid item style={{ zIndex: 2 }}>
        <Paper
          elevation={10}
          style={{ width: 240, height: 'calc(100vh - 64px)', overflow: 'auto' }}
        >
          <Suspense fallback='Loading...'>
            <RoomList queryRef={queryData} />
          </Suspense>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper elevation={2} style={{ height: '100%' }}>
          <Suspense fallback='Loading...'>
            <Outlet />
          </Suspense>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default RoomsPage
