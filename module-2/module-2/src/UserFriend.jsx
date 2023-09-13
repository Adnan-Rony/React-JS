export default function UserFriend({friend}){
    const {name,email}=friend;
    return (
        <div>
            <h4>Name:{name}</h4>
            <h4>email:{email}</h4>
        </div>
    )
}