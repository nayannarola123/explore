import '../ComA/ComA.css'
import main from  '../../assets/nayan.jpeg'

const  Profile = ({username,age,Hobby,Skill,Profession,Address,Pincode,Email,Contact}) => {

    return(
        <div className='item'>
           <div className='Card border'>
            <img src={main} alt="" />
               <div className=''>
               <p class="name"><span>Username:-</span>{username}</p>
                <p><span>Age:-</span>{age}</p>
                <p><span>Hobby:-</span>{Hobby}</p>
                <p><span>Education:-</span>{Skill}</p>
                <p><span>Address:-</span>{Address}</p>
                <p><span>Pincode:-</span>{Pincode}</p>
                <p><span>Email:-</span>{Email}</p>
                <p><span>Contact:-</span>&nbsp;{Contact}</p>
               </div>
           </div>
        </div>

    )

}
export default Profile;