export default function Square({color, onClick}){
    return (
        <div onClick={() => onClick()} style={
            {
                backgroundColor: color,
                minWidth: "50px",
                height: "50px"
            }
        }>
        </div>
    )
}