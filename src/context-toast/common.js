import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  height: 100%;
`;

export const Header = styled.div`
  background: #4267b2;
  padding: 10px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: white;
`;

export const Body = styled.div`
  padding: 20px;
`;

export const ToastHolder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Toast = styled.div`
  background: white;
  border-radius: 10px;
  color: black;
  width: 300px;
  margin-top: 20px;
  margin-right: 20px;
  overflow: hidden;
  display: flex;
  box-shadow: 1px 1px 5px #00000025;
  transition: all 1s ease;
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 0px 10px;
  margin: 0;
  font-size: 16px;
  padding-top: 10px;
  margin-bottom: 5px;
`;

export const Message = styled.p`
  font-weight: normal;
  padding: 0px 10px;
  margin: 0;
  font-size: 16px;
  padding-bottom: 10px;
`;

export const Close = styled.button`
  font-weight: bold;
  font-size: 16px;
  background: #eee;
  width: 100px;
  border: none;
`;

export const Button = styled.button`
  background-color: #4267b2;
  border-color: #4267b2;
  font-size: 16px;
  line-height: 22px;
  padding: 0px 16px;
  border-radius: 2px;
  font-weight: bold;
  color: white;
  margin: 0px 20px;
`;
