import styled from "@emotion/styled"
import Link from "next/link"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
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
      <LinkButton href="/challenge/day1">Day1</LinkButton>
      <LinkButton href="/challenge/day2">Day2</LinkButton>
      <LinkButton href="/challenge/day3">Day3</LinkButton>
      <LinkButton href="/challenge/day4">Day4</LinkButton>
      <LinkButton href="/challenge/day5">Day5</LinkButton>
      <LinkButton href="/challenge/day6">Day6</LinkButton>
      <LinkButton href="/challenge/day7">Day7</LinkButton>
      <LinkButton href="/challenge/day8">Day8</LinkButton>
      <LinkButton href="/challenge/day9">Day9</LinkButton>
      <LinkButton href="/challenge/day10">Day10</LinkButton>
      <LinkButton href="/challenge/day11">Day11</LinkButton>
      <LinkButton href="/challenge/day12">Day12</LinkButton>
      <LinkButton href="/challenge/day13">Day13</LinkButton>
      <LinkButton href="/challenge/day14">Day14</LinkButton>
      <LinkButton href="/challenge/day15">Day15</LinkButton>
      <LinkButton href="/challenge/day16">Day16</LinkButton>
      <LinkButton href="/challenge/day17">Day17</LinkButton>
      <LinkButton href="/challenge/day18">Day18</LinkButton>
      <LinkButton href="/challenge/day19">Day19</LinkButton>
      <LinkButton href="/challenge/day20">Day20</LinkButton>
      <LinkButton href="/challenge/day21">Day21</LinkButton>
      <LinkButton href="/challenge/day22">Day22</LinkButton>
      <LinkButton href="/challenge/day23">Day23</LinkButton>
      <LinkButton href="/challenge/day24">Day24</LinkButton>
      <LinkButton href="/challenge/day25">Day25</LinkButton>
      <LinkButton href="/challenge/day26">Day26</LinkButton>
      <LinkButton href="/challenge/day27">Day27</LinkButton>
      <LinkButton href="/challenge/day28">Day28</LinkButton>
      <LinkButton href="/challenge/day29">Day29</LinkButton>
      <LinkButton href="/challenge/day30">Day30</LinkButton>
      <LinkButton href="/challenge/day31">Day31</LinkButton>
      <LinkButton href="/challenge/day32">Day32</LinkButton>
      <LinkButton href="/challenge/day33">Day33</LinkButton>
      <LinkButton href="/challenge/day34">Day34</LinkButton>
      <LinkButton href="/challenge/day35">Day35</LinkButton>
    </Grid>
  )
}
