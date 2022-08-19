export const usercolumns=[
    {field:"fullName",headerName:"FullName",width:130,renderCell:(params)=>{
        return(
            <div className="CellwidthImg">
                <img className="cellImg" src='https://mrkzgulfup.com/uploads/165830722270871.jpg' alt="avatar"/>
                {params.row.fullName}
            </div>
        )
    }},
    {field:"PhoneNumber",headerName:"PhoneNumber",width:150},
    {field:"whatsAppNumber",headerName:"WhatsAppNumber",width:150},
    {field:"accountStatus",headerName:"AccountStatus",width:100 ,renderCell:(params)=>{
        return(
           <div className={`cellwidthStatus ${params.row.accountStatus}`}>{params.row.accountStatus}</div>
        );
    }},
    {field:"addresses",headerName:"addresses",width:200,renderCell:(params)=>{
        return(
            <div className="addresses">
                <ul>
                    <li>
                        <p className="key">clinicName : </p>
                        <p className="value">smileClinic</p>
                    </li>
                    <li>
                        <p className="key">governorate : </p>
                        <p className="value">cairo</p>
                    </li>
                    <li>
                        <p className="key">city : </p>
                        <p className="value">jizah</p>
                    </li>
                    <li>
                        <p className="key">street : </p>
                        <p className="value">23 omar elkhatap street</p>
                    </li>
                    <li>
                        <p className="key">building :</p>
                        <p className="value">2</p>
                    </li>
                </ul>
            </div>
        )
    }},
]
//temporary data
export const userRows=[
    {
        id:1,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:1,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:2,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:3,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:4,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:5,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:6,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:7,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    {
        id:8,
        fullName:"ahmed",
        Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
        PhoneNumber:"01011773739",
        whatsAppNumber:"01011773739",
        AccountStatus: "active",
        
    },
    
]
