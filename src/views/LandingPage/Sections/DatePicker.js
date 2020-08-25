import React, { useState }  from "react";

import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import GridItem from "components/Grid/GridItem.js";

export default function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());

    return(
    <GridItem xs={12} sm={12} md={12}>
        <FormControl fullWidth>
            <Datetime
              timeFormat={false}
              inputProps={{ placeholder: "Date of Birth" }}
              onChange={date => setStartDate(date)}
              defaultValue={startDate}
            />
        </FormControl>
      </GridItem>
    );
}