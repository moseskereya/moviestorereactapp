import React from 'react'
import requests from '../Requests'
import Row from '../Row'
import Main from './Main'

function Home() {
    return (
      <>
            <Main />
            <Row rowID="1"  Title="Popular" FetchUrl={requests.requestPopular} />
            <Row rowID="2" Title="Upcoming" FetchUrl={requests.requestUpcoming} />
            <Row rowID="3" Title="Trending" FetchUrl= {requests.requestTrending} />
            <Row rowID="4" Title="Top Rated" FetchUrl= {requests.requestTopRated} />
            <Row rowID="5" Title="Horror" FetchUrl= {requests.requestHorror} />
      </>
  )
}

export default Home