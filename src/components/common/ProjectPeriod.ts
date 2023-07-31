import styled from 'styled-components';

interface IProjectTerm {
  border: string;
}

export const ProjectPeriod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

export const ProjectTerm = styled.div<IProjectTerm>`
  display: flex;
  width: 108px;
  border: 1px solid #f3f3f3;
  padding: 8px 16px;
  border-radius: 8px;
  &:focus-within {
    border: ${(props) => `1px solid ${props.border}`};
  }
`;

export const ProjectTermInput = styled.input`
  width: 35px;
  outline: none;
  border: none;
  font-size: 12px;
`;

export const BreakPoint = styled.span`
  padding-bottom: 5px;
  color: #9d9d9d;
`;

export const To = styled.span`
  font-weight: 600;
  color: #9d9d9d;
  margin: 0 5px;
`;

export const InProgressCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InPrograssState = styled.img`
  margin: 0 5px;
`;

export const InProgressLabel = styled.span`
  font-size: 12px;
  color: #9d9d9d;
`;
