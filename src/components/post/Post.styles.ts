import styled from 'styled-components/native';

import { layout } from '../../constants';

export const ContainerPostInfo = styled.View`
    flex: 1;
    max-height: ${layout.height / 4};
    height: ${layout.height / 4};

    margin-right: 68px;
    margin-bottom: 60px;
    padding: 16px;

    justify-content: flex-end;

    z-index: 2;
`;

export const ContainerActions = styled.View`
    width: 60px;
    height: ${layout.height / 2.8};

    position: absolute;
    bottom: 78px;
    right: 8px;

    justify-content: space-around;
    align-items: center;

    background-color: transparent;
`;
