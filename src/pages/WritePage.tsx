import * as React from 'react';
import styled from 'styled-components';
import FullPageEditor from '../components/write/FullPageEditor';
import EditorPanes from '../components/write/EditorPanes';

const WritePageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

interface WritePageProps {}

const WritePage: React.SFC<WritePageProps> = props => {
  return (
    <WritePageBlock>
      {/* <FullPageEditor /> */}
      <EditorPanes left="hello" right="bye" />
    </WritePageBlock>
  );
};

export default WritePage;
