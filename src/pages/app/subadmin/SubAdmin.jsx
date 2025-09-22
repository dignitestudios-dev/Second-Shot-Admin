import React, { useState } from "react";
import SubAdminTable from "../../../components/app/subadmin/SubAdminTable";
import CreateSubAdmin from "../../../components/app/subadmin/CreateSubAdmin";
import Button from "../../../components/global/Button";
import { useUsers } from "../../../hooks/api/Get";

const SubAdmin = () => {
  const [createSubAdmin, setCreateSubAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);
  const { data, loading, pagination } = useUsers(
    "/api/admin/get-admins",
    currentPage,
    "",
    "",
    update
  );

  return (
    <div>
      <div className="flex justify-end">
        <div className=" w-[200px]">
          <Button
            text={"Create Sub Admin"}
            handleSubmit={() => setCreateSubAdmin(true)}
          />
        </div>
      </div>
      <CreateSubAdmin
        setUpdate={setUpdate}
        isOpen={createSubAdmin}
        onClose={() => setCreateSubAdmin(false)}
      />
      <SubAdminTable
        setCurrentPage={setCurrentPage}
        pagination={pagination}
        loading={loading}
        data={data}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default SubAdmin;
