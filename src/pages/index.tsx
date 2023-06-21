import styled from "@emotion/styled"
import Link from "next/link"

const Grid = styled.div`
  display: flex;
`

const LinkButton = styled(Link)`
  background-color: #2ada6d;
  padding: 5px 10px 5px 10px;
  border-radius: 12px;
  font-size: 30px;
  margin: 30px;
  box-shadow: 2px 2px 2px #676767;
`

export default function Home() {
  return (
    <Grid>
      <LinkButton href="/day1">Day1</LinkButton>
    </Grid>
  )
}
