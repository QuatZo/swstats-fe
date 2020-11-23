import AnimatedNumber from "animated-number-react";
import NumericLabel from 'react-pretty-numbers';
 
export default function AnimatedNumberContainer(props){

    const formatNumber = (val) => {
      const params = {
        shortFormat: true,
        shortFormatMinValue: 100000,
        precision: props.format,
        shortFormatPrecision: 1,
        wholenumber: props.format ? null : "floor",
      }
      return (
        <NumericLabel
          params={params}
        >{val}</NumericLabel>
      )
    }
    

    return (
        <AnimatedNumber
          value={props.value}
          formatValue={formatNumber}
          duration={2000}
          easing="linear"
        />
    );
}