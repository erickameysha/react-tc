import React from "react";


type  StarPropsType = {
    selected: boolean
}
const Star = (props: StarPropsType ) => {
    console.log('Star render')
    if (props.selected === true) {
        return <span><b> star </b> </span>
    } else {
        return <span> star </span>
    }


}


type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props: RatingProps) {

    if(props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if(props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if(props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if(props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );

}


export default Rating