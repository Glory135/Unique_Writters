import React, { useContext } from "react";
import { SingleListItem } from "./SingleListItem";
import { writers } from "../../data";
import { Button } from "@material-ui/core";
import { Context } from "../../Context/Context";

export const WritersList = () => {
  const { theme } = useContext(Context);
  return (
    <div className='writerList'>
      <div className='right-head'>
        Top{" "}
        <span style={{ borderTop: "2px solid " + theme.secondary }}>10</span>{" "}
        Writers
      </div>
      {writers.slice(0, 10).map((writer, index) => {
        return <SingleListItem key={index} writer={writer} />;
      })}
      <Button color='primary' size='small'>
        Show More
      </Button>
    </div>
  );
};
