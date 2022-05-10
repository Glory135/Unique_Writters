import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { WritersList } from "../WritersList/WritersList";

export const RightBar = () => {
  const { theme } = useContext(Context);
  return (
    <div className='rightBar'>
      <div className='right-head'>
        Top{" "}
        <span style={{ borderTop: "2px solid " + theme.secondary }}>10</span>{" "}
        Writers
      </div>
      <div className='writter-list-container'>
        <WritersList />
      </div>
    </div>
  );
};
