
import './newUser.scss'
import image from '../../../assets/Noimage.jpg'

const NewUser = () => {
  return (
    <div className='newUser'>
        <div className="top">
            <h1>Edite New User</h1>
        </div>
        <div className="bottom">
            <div className="left">

                <div className="imageNewuser">
                <img src={image} alt="" />
                </div>
            </div>
            <div className="right">
                <form action="">
                    <div className="formInput">
                        <div className="form-group">
                            <label htmlFor="fullName">full name </label>
                            <input id="fullName" type="text" placeholder="Ahmed Darwish"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">phone Number: </label>
                            <input id="phoneNumber" type="number" placeholder="01011773739"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="whatsAppNumber">whatsApp Number: </label>
                            <input id="whatsAppNumber" type="number" placeholder='01050950059'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">account Status: </label>
                            <select name="" id="">
                                <option value="">Active</option>
                                <option value="">Bloced</option>
                                <option value="">Pending</option>
                            </select>
                        </div>
                        <h5>Address</h5>
                        <div className="form-group">
                            <label htmlFor="clinicName">clinic Name: </label>
                            <input placeholder="clinicName" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clinicName">clinic Name: </label>
                            <input placeholder="clinicName" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clinicName">clinic Name: </label>
                            <input placeholder="clinicName" type="text" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewUser







// // function NewUser() {
//   return (
//     <div className={styles.newUser}>
//         <h1 className='newUserTitle'>New Uswe</h1>
//         <form className={styles.newUserForm}>
//             <div className={styles.nerUserItem}>
//                 <lable> user Name</lable>
//                 <input type="text" placeholder=" Enter Full name" />
//             </div>
//             <div className={styles.nerUserItem}>
//                 <lable> phpne Number</lable>
//                 <input type="tele" maxLength="11" placeholder=" Enter Full name" />
//             </div>
//             <div className={styles.nerUserItem}>
//                 <lable> Nationality id </lable>
//                 <input type="number" max="15" placeholder=" Enter Full name" />
//             </div>
//             <div className={styles.nerUserItem}>
//                 <lable> Address </lable>
//                 <input type="text" placeholder=" Enter Full name" />
//             </div>
//             {/*selection  */}
//            <div className={styles.userType}>
//                <label>Type</label>
//                <select className={styles.newUserSelect} name='type' id='type'>
//                 <option value="Flay Boy">Flay Boy</option>
//                 <option value="Employee">Employee</option>
//                </select>
//            </div>
//            <button className={styles.newuserButton}>
//                Create
//            </button>
//         </form>

//     </div>
//   )
// }

// export default NewUser