export default function HobbyLinks() {
    let hobbyLinks = ["https://www.pgatour.com/", "https://www.nhl.com/blues/", ]
    return (
        <div>
            <p>My Hobbies</p>
        <a href = {hobbyLinks[0]}>Golf</a>
        <br></br>
        <a href = {hobbyLinks[1]}>St. Louis Blues Hockey</a>
    </div>
    )
}