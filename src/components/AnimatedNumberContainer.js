import AnimatedNumber from "animated-number-react";
 
export default function AnimatedNumberContainer(props){

    const formatNumber = (val) => val.toFixed(props.format)

    return (
        <AnimatedNumber
          value={props.value}
          formatValue={formatNumber}
          duration={2000}
          easing="linear"
        />
    );
}