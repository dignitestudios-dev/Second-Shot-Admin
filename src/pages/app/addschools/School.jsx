import React, { useState } from "react";
import SchoolTable from "../../../components/app/addschool/SchoolTable";
import AddSchoolModal from "../../../components/app/addschool/AddSchoolModal";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";
import { useGetSuccess } from "../../../hooks/api/Get";
import UpdateSchoolModal from "../../../components/app/addschool/UpdateSchoolModal";
import SkeletonTable from "../../../components/global/SkeletonTable";

const School = () => {
  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteloading, setDeleteLoading] = useState(null);
  const [schoolName, setSchoolName] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [update, setUpdate] = useState(false);

  const { data, loading: loader } = useGetSuccess(`/api/admin/schools`, update);

  // ✅ Add School
  const handleAddSchool = async () => {
    setLoading(true);
    const payload = { name: schoolName };
    try {
      const response = await axios.post("/api/admin/add-school", payload);
      if (response?.status === 201) {
        SuccessToast(response?.data?.message || "School added successfully ✅");
        setOpen(false);
        setSchoolName("");
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete School
  const handleDeleteSchool = async (id) => {
    setDeleteLoading(id);
    try {
      const response = await axios.delete(`/api/admin/delete-school/${id}`);
      if (response?.data?.success) {
        SuccessToast(response?.data?.message || "School deleted successfully");
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Delete failed ❌");
    } finally {
      setDeleteLoading(null);
    }
  };

  // ✅ Update School
  const handleUpdateSchool = async () => {
    if (!selectedSchool) return;
    setLoading(true);
    try {
      const response = await axios.put(
        `/api/admin/update-school/${selectedSchool._id}`,
        { name: schoolName }
      );
      if (response?.data?.success) {
        SuccessToast(
          response?.data?.message || "School updated successfully ✅"
        );
        setUpdateOpen(false);
        setSelectedSchool(null);
        setSchoolName("");
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="p-3">
        <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[32px] font-[600] text-[#202224]">School</h1>
          <button
            className="h-[42px] w-[110.58px] bg-grad-button rounded-[8px] text-white text-[14px]"
            onClick={() => setOpen(true)}
          >
            + Add New
          </button>
        </div>
        {loader ? (
          <SkeletonTable />
        ) : (
          <SchoolTable
            data={data?.data}
            onDelete={handleDeleteSchool}
            deleteloading={deleteloading}
            onEdit={(school) => {
              setSelectedSchool(school);
              setSchoolName(school?.name);
              setUpdateOpen(true);
            }}
          />
        )}
      </div>

      {/* Add Modal */}
      <AddSchoolModal
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        onSubmit={handleAddSchool}
        showModal={open}
        loading={loading}
        handleClose={() => setOpen(false)}
      />

      {/* Update Modal */}
      {updateOpen && (
        <UpdateSchoolModal
          showModal={updateOpen}
          handleClose={() => setUpdateOpen(false)}
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          onSubmit={handleUpdateSchool}
          loading={loading}
        />
      )}
    </div>
  );
};

export default School;
