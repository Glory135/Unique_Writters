import React from "react";
import { SingleListItem } from "./SingleListItem";
import { writers } from "../../data";
import { Button } from "@material-ui/core";

export const WritersList = () => {
  return (
    <div className='writerList'>
      {writers.slice(0, 10).map((writer, index) => {
        return <SingleListItem key={index} writer={writer} />;
      })}
      <Button color='primary' size='small'>
        Show More
      </Button>
    </div>
  );
};
