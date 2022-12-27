import styled from "styled-components";

export const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Quicksand, arial, sans-serif;
`;

export const UploadTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UploadTitle = styled.div`
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

export const UploadForm = styled.form`
  display: flex;
`;

export const UploadInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const UploadButtonLabel = styled.label`
  display: flex;
  background-color: #003580;
  color: white;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 96px;
  width: 128px;
  margin: 32px 16px 0 0;
  padding: 0 16px;
  cursor: pointer;
  border: 0;
`;

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003580;
  color: white;
  font-size: 14px;
  height: 96px;
  min-width: 128px;
  margin: 32px 0 0 16px;
  padding: 0 16px;
  border: 0;
`;
