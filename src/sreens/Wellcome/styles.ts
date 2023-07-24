import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Overlay = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`;

export const GradientOverlay = styled(Overlay)`
  background-color: rgba(247, 93, 55, 1);
  opacity: 0.4;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.54%, #000 100%);
`;

export const Title = styled.Text`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  text-transform: lowercase;
  color: #ffff;
  padding-right: 100px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #ffff;
  padding: 0 50px 28px 24px;
`;
