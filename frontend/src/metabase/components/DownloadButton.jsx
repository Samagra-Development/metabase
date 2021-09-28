/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "grid-styled";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { color } from "metabase/lib/colors";
import { extractQueryParams } from "metabase/lib/urls";
import Button from "metabase/components/Button";
import Icon from "metabase/components/Icon";
import Label from "metabase/components/type/Label";

function colorForType(type) {
  switch (type) {
    case "csv":
      return color("accent7");
    case "xlsx":
      return color("accent1");
    case "json":
      return color("bg-dark");
    default:
      return color("brand");
  }
}
async function convert(key){
  const input = document.getElementById(key);
  
 html2canvas(input)
   .then(async (canvas) => {
     let imgData = canvas.toDataURL('image/png');
     //imgData = await resizedataURL(imgData, 100, 100)
     
     const pdf = new jsPDF();
     pdf.addImage(imgData, 'JPEG', 0, 0);
     pdf.output('dataurlnewwindow');
     pdf.save("preview.pdf");
   }).catch((e)=>{
     console.log(e);
   })
}


const DownloadButton = ({
  children,
  method,
  url,
  k,
  type,
  params,
  extensions,
  ...props
}) => (
  type === 'pdf' ?
  <Box>
   
      {params && extractQueryParams(params).map(getInput)}
      <Flex
        is="button"
        className="text-white-hover bg-brand-hover rounded cursor-pointer full hover-parent hover--inherit"
        align="center"
        p={1}
        my={1}
        onClick={()=>{
          convert(k);
        }}
        {...props}
      >
        <Icon name={children} size={32} mr={1} color={colorForType(children)} />
        <Label my={0}>.{children}</Label>
      </Flex>
  </Box> : 
  <Box>
    <form method={method} action={url}>
      {params && extractQueryParams(params).map(getInput)}
      <Flex
        is="button"
        className="text-white-hover bg-brand-hover rounded cursor-pointer full hover-parent hover--inherit"
        align="center"
        p={1}
        my={1}
        onClick={e => {
          if (window.OSX) {
            // prevent form from being submitted normally
            e.preventDefault();
            // download using the API provided by the OS X app
            window.OSX.download(method, url, params, extensions);
          }
        }}
        {...props}
      >
        <Icon name={children} size={32} mr={1} color={colorForType(children)} />
        <Label my={0}>.{children}</Label>
      </Flex>
    </form>
  </Box>
);

const getInput = ([name, value]) => (
  <input type="hidden" name={name} value={value} />
);

DownloadButton.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  type:PropTypes.string,
  k:PropTypes.string,
  params: PropTypes.object,
  extensions: PropTypes.array,
};

DownloadButton.defaultProps = {
  method: "POST",
  params: {},
  extensions: [],
};

export default DownloadButton;
