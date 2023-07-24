import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  padding: 0 30px;
  background: #FFF;
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #555555;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  text-transform: lowercase;
`;

export const Divider = styled.View`
  height: 24px;
`;

export const Content = styled.View``;
export const PrincipalTitle = styled.Text`
  justify-content: flex-start;
  margin-top: 30px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  text-transform: lowercase;
  color: ${({ theme }: any) => theme.colors.primary.primary_500};
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #353a58;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const SubTitle = styled.Text`
  color: #555555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 8px 0 32px 0;
`;

export const TextButtonSubmit = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;