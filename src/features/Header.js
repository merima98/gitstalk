import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: #5c75f6;
  cursor: pointer;
`;

const Image = styled.div`
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMjUgMjAiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0xMCAwYTEwIDEwIDAgMDAtMy4yIDE5LjZjLjUgMCAuNy0uMy43LS41di0xLjdDNC43IDE4IDQuMSAxNiA0LjEgMTZjLS40LTEuMS0xLTEuNC0xLTEuNC0xLS43IDAtLjcgMC0uNyAxIC4xIDEuNSAxIDEuNSAxIDEgMS42IDIuNCAxLjIgMyAxIDAtLjcuMy0xLjIuNi0xLjQtMi4yLS4zLTQuNi0xLjEtNC42LTUgMC0xIC40LTIgMS0yLjcgMC0uMi0uNC0xLjMuMS0yLjYgMCAwIC45LS4zIDIuOCAxYTkuNSA5LjUgMCAwMTUgMGMyLTEuMyAyLjgtMSAyLjgtMSAuNSAxLjMuMiAyLjQgMCAyLjYuNy43IDEgMS42IDEgMi43IDAgMy45LTIuMyA0LjctNC41IDUgLjQuMy43LjkuNyAxLjh2Mi44YzAgLjMuMi42LjcuNUExMCAxMCAwIDAwMTAgMHoiLz48cGF0aCBmaWxsPSIjMzMzIiBkPSJNMTEgOC4ySDkuM3YuNmgxLjV2LS42em0tNS42LjRoLS43YS4yLjIgMCAwMTAtLjRoLjd2LjR6bTEwLjMgMEgxNXYtLjRoLjdhLjIuMiAwIDAxMCAuNHoiLz48cGF0aCBmaWxsPSIjMzMzIiBkPSJNOS42IDguN2wtLjEgMWMwIC43LS43IDEuMy0xLjQgMS4zSDYuNWMtLjcgMC0xLjMtLjYtMS4zLTEuM0w1IDguNmMwLS41LjMtLjguNy0uOGgzYy40IDAgLjguNC44Ljl6bTUuNy0uMXYxLjFjLS4xLjctLjcgMS4zLTEuNCAxLjNoLTEuNmMtLjcgMC0xLjMtLjYtMS40LTEuM3YtMWMtLjEtLjUuMy0xIC44LTFoMi45Yy40IDAgLjguNC43Ljl6TTkgMTJhLjMuMyAwIDEwLS4xLjVsLjItLjV6bS4yLjN2LS4yLjJ6bTIgMHYtLjIuMnptLjMuMmEuMy4zIDAgMTAtLjItLjVsLjIuNXptLTIuNiAwaC4ybC4xLS40LS4xLS4xLS4yLjV6bTIuNCAwaC4ybC0uMi0uNWgtLjFsLjEuNXptLTIuMiAwYy43LjMgMS41LjMgMi4yIDBsLS4xLS40YTMgMyAwIDAxLTIgMGwtLjEuNHpNMzQgMTcuNGMtMS45IDAtMy4zLS41LTQuNC0xLjQtMS0xLTEuNS0yLjMtMS42LTRhNjAuNiA2MC42IDAgMDEwLTMuN2MwLTEuNy42LTMgMS43LTMuOSAxLTEgMi40LTEuNCA0LjItMS40IDEuMyAwIDIuMy4yIDMuMi42YTUgNSAwIDAxMiAxLjZjLjUuNi43IDEuMi43IDEuOHYuM2wtLjQuMUgzN2wtLjItLjNjLS4yLS41LS41LTEtMS0xLjMtLjQtLjMtMS0uNS0xLjktLjVhMyAzIDAgMDAtMi4yLjhjLS41LjUtLjggMS4yLS44IDIuM2E1Ni4xIDU2LjEgMCAwMDAgMy41YzAgMS4xLjMgMS45LjkgMi40YTMgMyAwIDAwMi4yLjhjMSAwIDEuNy0uMyAyLjItLjguNi0uNS45LTEuMi45LTIuM3YtLjZoLTIuNGwtLjQtLjEtLjEtLjR2LTFsLjEtLjQuNC0uMWg0LjhsLjMuMS4yLjNWMTJjMCAxLS4zIDItLjggMi45LS41LjgtMS4yIDEuNC0yIDEuOC0xIC41LTIgLjctMy4zLjd6bTkuNi0uMmwtLjQtLjEtLjEtLjR2LTEzbC4xLS40LjQtLjFoMS45bC4zLjEuMi40djEzYzAgLjIgMCAuMy0uMi40bC0uMy4xaC0yem05LjcgMGwtLjQtLjEtLjEtLjR2LTExSDQ5bC0uNC0uMS0uMS0uNFYzLjdsLjEtLjQuNC0uMWgxMC4ybC40LjEuMS40djEuNWwtLjEuNC0uNC4xaC0zLjd2MTFsLS4xLjQtLjQuMWgtMS44em0xMy45LjJhOCA4IDAgMDEtMy0uNWMtLjktLjQtMS41LS45LTItMS41LS40LS41LS42LTEuMi0uNy0xLjlsLjEtLjMuMy0uMWgxLjlsLjMuMS4zLjNjLjEuNC40LjguOSAxLjEuNS4zIDEuMS41IDIgLjUuOSAwIDEuNi0uMiAyLS41LjUtLjMuOC0uNy44LTEuMyAwLS4zLS4yLS42LS40LS45YTMgMyAwIDAwLTEtLjZsLTIuMy0uN0E4LjUgOC41IDAgMDE2MyA5LjdjLS43LS43LTEuMS0xLjUtMS4xLTIuNyAwLS44LjItMS40LjYtMiAuNS0uNyAxLTEuMSAxLjgtMS41YTcgNyAwIDAxMi44LS41YzEuMSAwIDIgLjIgMi45LjYuOC40IDEuNC45IDEuOCAxLjQuNS42LjcgMS4yLjcgMS44bC0uMS4zSDcwYy0uMiAwLS40IDAtLjUtLjMgMC0uNC0uMy0uOC0uOC0xYTMgMyAwIDAwLTEuNy0uNWMtLjcgMC0xLjMuMi0xLjcuNC0uNC4zLS42LjctLjYgMS4zIDAgLjMgMCAuNi4zLjlsMSAuNiAyIC42IDIuOC45Yy43LjMgMS4yLjggMS41IDEuMy40LjUuNSAxLjEuNSAxLjkgMCAuOS0uMiAxLjYtLjcgMi4zLS40LjYtMS4xIDEtMiAxLjQtLjguMy0xLjguNS0zIC41em0xMi0uMmwtLjMtLjEtLjItLjR2LTExSDc1bC0uMy0uMS0uMS0uNFYzLjNsLjQtLjFoMTAuM2wuMy4xLjIuNHYxLjVjMCAuMSAwIC4zLS4yLjRsLS4zLjFoLTMuN3YxMWMwIC4yIDAgLjMtLjIuNGwtLjMuMWgtMS45em02LjggMGEuNC40IDAgMDEtLjQtLjR2LS4ybDQuOS0xMi45Yy4xLS4zLjQtLjUuNy0uNWgyLjJjLjQgMCAuNi4yLjcuNUw5OSAxNi42di41bC0uNC4xaC0xLjdhLjYuNiAwIDAxLS42LS40bC0xLTIuNGgtNS45bC0uOSAyLjRjMCAuMy0uMy40LS42LjRoLTEuN3ptNC01LjFoNC42bC0yLjMtNi4yLTIuMyA2LjJ6bTExLjkgNS4xbC0uMy0uMS0uMi0uNHYtMTNjMC0uMiAwLS4zLjItLjRsLjMtLjFoMS45bC4zLjEuMi40djExLjFoNi4zbC40LjEuMS40djEuNGwtLjEuNC0uNC4xaC04Ljd6bTEyLjIgMGwtLjMtLjEtLjItLjR2LTEzYzAtLjEgMC0uMy4yLS40bC4zLS4xaDEuOGwuNC4xLjEuNHY0LjdsNC41LTQuOGMuMi0uMy40LS40LjgtLjRoMmwuMy4xLjEuM1Y0bC01LjUgNiA1LjggNi42LjEuMy0uMS4zLS4zLjFIMTIyYy0uMyAwLS41IDAtLjYtLjJsLS4yLS4yLTQuOC01LjJ2NS4xbC0uMS40LS40LjFoLTEuOHoiLz48L3N2Zz4=)
    no-repeat;
  height: 20px;
  width: 124.5px;
  display: block;
  border: none;
  outline: none;
  margin-right: 250px;
`;

// const Theme = styled.div`
//   margin-left: 12px;
//   width: 22px;
//   height: 22px;
//   border-radius: 100px;
//   background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMyAxMiI+PHBhdGggZmlsbD0iI0E0QTRBNCIgZD0iTTYuOCAxMmMyLjMgMCA0LjQtMS4zIDUuNC0zLjQtLjYuMy0xLjMuNC0yIC40YTQuNyA0LjcgMCAwMS0yLjEtOSA5IDkgMCAwMC0xLjMgMCA2IDYgMCAxMDAgMTJ6Ii8+PC9zdmc+)
//     no-repeat #eaeaea;
//   background-size: 14px 14px;
//   background-position: 50%;
//   cursor: pointer;
//   margin-right: 78px;
// `;

const Label = styled.label`
  color: #333;
  font-size: 1em;
  margin-right: 0.3em;
`;

const Input = styled.input`
  background: #fff;
  color: #333;
  border: 1px solid #f1f1f1;
  /* box-sizing: border-box; */
  font-size: 1em;
  padding: 8px 12px;
  width: 220px;
  height: 36px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 0.5em 1.25em;
  cursor: pointer;
  background-color: #5c75f6;
  font-size: 1em;
  border-radius: 2px;
  color: #fff;
  font-family: Rubik;
  border: none;
  letter-spacing: 0.01em;

  width: 93px;
  height: 36px;
`;

function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link>
          <Image></Image>
        </Link>
        {/* <Theme></Theme> */}
      </Logo>
      <div>
        <form>
          <Label>github.com/</Label>
          <Input />
          <SearchButton>Search</SearchButton>
        </form>
      </div>
    </Wrapper>
  );
}

export default Header;
