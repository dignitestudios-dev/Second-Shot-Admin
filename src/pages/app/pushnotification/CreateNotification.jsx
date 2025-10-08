import React, { use, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Calender from "../../../components/global/DatePicker";
import { useNavigate } from "react-router";
import Button from "../../../components/global/Button";
import TimePicker from "../../../components/global/TimePicker";
import { useFormik } from "formik";
import { CreateNotificationSchema } from "../../../schema/app/CreateNotificationSchema";
import { CreateNotificationValues } from "../../../init/authentication/CreateNotificationValues";
import { useCreateNotification } from "../../../hooks/api/Post";
import { processNotification } from "../../../lib/utils";
import { useUsers } from "../../../hooks/api/Get";
import HobbiesDropdown from "../../../components/app/usermanagement/HobbiesDropdown";

const CreateNotification = () => {
  const [startDate, setStartDate] = useState(null);
  const { loading, postData } = useCreateNotification();
  const [useConditional, setUseConditional] = useState(false);
  const navigate = useNavigate();
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCareers, setSelectedCareers] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const { data: statesCard, loading: statesLoading } =
    useUsers(`/api/admin/states`);
  const { data: sportsData, loading: sportLoading } = useUsers(
    `/api/services/get-sports`
  );
  const { data: hobbiesData, loading: hobbiesLoading } = useUsers(
    `/api/services/get-hobbies`
  );
  const { data: schoolsData, loading: schoolsLoading } =
    useUsers(`/api/admin/schools`);
  const { data: subjectsData, loading: subjectsLoading } = useUsers(
    `/api/services/get-subjects`
  );
  const { data: careersData, loading: careersLoading } = useUsers(
    `/api/admin/get-all-careers`
  );
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: { title: "", description: "" },
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (useConditional) {
        const data = {
          notification_title: values.title,
          notification_message: values.description,
          school: selectedSchool,
          sport: selectedSport,
          hobby: selectedHobbies,
          career: selectedCareers,
        };
        postData(
          "/api/admin/send-conditional-notification",
          false,
          null,
          data,
          processNotification,
          resetForm
        );
      } else {
        const data = {
          notification_title: values.title,
          notification_message: values.description,
        };
        postData(
          "/api/admin/send-notification",
          false,
          null,
          data,
          processNotification,
          resetForm
        );
      }
    },
  });
  return (
    <div className="bg-white rounded-[20px] p-3 ">
      <div className="flex items-center gap-3 mb-6">
        <button className="text-[28px]" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack />
        </button>
        <h2 className="text-[24px] font-semibold text-[#181818] tracking-[-0.2px]">
          Create Notification
        </h2>
      </div>

      <form className="space-y-6 px-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Title of Notification
          </label>
          <input
            type="text"
            placeholder="Type Here..."
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            id="title"
            name="title"
            maxLength={50}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            style={{ border: "1px solid", borderColor: "#00000030" }}
          />
          {errors && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Description of Notification
          </label>
          <textarea
            placeholder="Type Here..."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
            name="description"
            maxLength={250}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            rows={4}
          ></textarea>
          {errors && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="conditional"
            checked={useConditional}
            onChange={() => setUseConditional(!useConditional)}
          />
          <label htmlFor="conditional">
            Send to specific school, hobby, sport or career
          </label>
        </div>

        {useConditional && (
          <div className="space-y-4">
            <div>
              <label className="font-[500] text-[14px]">School</label>
              <select
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 text-sm"
              >
                <option value="">None</option>
                {schoolsData?.map((school) => (
                  <option key={school.id} value={school.name}>
                    {school.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-[500] text-[14px]">Sport</label>
              <select
                onChange={(e) => setSelectedSport(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 text-sm"
              >
                <option value="">None</option>
                {sportsData?.map((sport) => (
                  <option key={sport._id} value={sport._id}>
                    {" "}
                    {console.log(sport, "sport")}
                    {/* id send */}
                    {sport?.sport_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-[500] text-[14px]">Carrers</label>
              <select
                onChange={(e) => setSelectedCareers(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-2 text-sm"
              >
                <option value="">None</option>
                {careersData?.map((careers) => (
                  <option key={careers._id} value={careers._id}>
                    {careers?.career_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <HobbiesDropdown
                hobbiesData={hobbiesData}
                selectedHobbies={selectedHobbies}
                setSelectedHobbies={setSelectedHobbies}
                valueKey="_id"
              />
            </div>
          </div>
        )}

        <div className="flex gap-6">
          <div className="w-[150px]">
            <Button text={"Save"} type={"submit"} loading={loading} />
          </div>
          <div>
            <button className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px]   text-[#000000] text-[14px] font-[700] ">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
