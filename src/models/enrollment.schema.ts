import mongoose,{Schema} from "mongoose";
interface IEnrollment extends Document{
    student:mongoose.Types.ObjectId,
    course:mongoose.Types.ObjectId,
    enrollment:Date,
    enrollmentStatus:EnrollmentStatus,
whatsapp:string,
}
enum EnrollmentStatus{
Approve="approve",
Reject="reject",
Pending="pending"
    }

const enrollmentSchema=new Schema<IEnrollment>({
    student:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:"Course"
    },
    enrollment:{
        type:Date,
        default:Date.now()
    },
    enrollmentStatus:{
        type:String,
        enum:[EnrollmentStatus.Approve, EnrollmentStatus.Reject, EnrollmentStatus.Pending],
    },
    whatsapp:String,
})
const Enrollment=mongoose.models.Enrollment||mongoose.model("Enrollment",enrollmentSchema);
export default Enrollment;