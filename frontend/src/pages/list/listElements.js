import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListPage = styled.div`
  display: flex;
  justify-content: center;
  font-family: Quicksand, arial, sans-serif;
`;

export const ListTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 8px;
  color: #db4c77;
  font-size: 24px;
  font-weight: 700;
  width: 200px;
  border-bottom: 4px dotted #003580;
`;

export const ListWrapper = styled.div`
  display: block;
  padding: 4px;
  margin: 16px 0 0 32px;
  width: 100%;
  max-width: 1600px;
`;

export const ListItemContainer = styled.div`
  margin: 8px 0;
`;

export const ListItem = styled(Link)`
  color: #003580;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    color: #db4c77;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
