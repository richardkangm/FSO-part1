import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part name={props.part1} number={props.exercises1}></Part>
            <Part name={props.part2} number={props.exercises2}></Part>
            <Part name={props.part3} number={props.exercises3}></Part>
        </div>
    )
}

export default Content;