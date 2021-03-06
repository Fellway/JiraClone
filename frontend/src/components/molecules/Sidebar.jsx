import styled from "styled-components";
import NavButton from "../atoms/NavButton";
import { ListTask, Sun, Table, ArrowLeftCircleFill } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";

const Wrapper = styled.nav`
  height: 100vh;
  width: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: #263238;
  > *:last-child {
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
  }
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  row-gap: 40px;
`;

const Sidebar = () => {
    function logout() {
      sessionStorage.removeItem('access_token');
      window.location.reload(false);
    }
    
    const location = useLocation();

  return (<Wrapper>
    <IconsWrapper>
      <NavLink exact to={"/"}>
        <NavButton isActive={location.pathname === '/'} Icon={ListTask} color={"#F57C00"} />
      </NavLink>
      <NavLink exact to={"/rooms"}>
        <NavButton isActive={location.pathname === '/rooms'} Icon={Table} color={"#F57C00"} />
      </NavLink>
      <NavLink exact to={"/solar-system"}>
        <NavButton isActive={location.pathname === '/solar-system'} Icon={Sun} color={"#F57C00"} />
      </NavLink>
    </IconsWrapper>
    <NavButton Icon={ArrowLeftCircleFill} color={"#F57C00"} onClick={() => logout()}/>
  </Wrapper>)
}
  ;

export default Sidebar;