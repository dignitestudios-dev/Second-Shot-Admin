import { useState, useEffect } from "react";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
      setData(data?.data);
      setPagination({
        currentPages: data?.data?.currentPage,
        totalPages: data?.data?.totalPages,
        totalUsers: data?.data?.totalUsers,
      });
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return { loading, data, pagination };
};
const useGetNotification = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getNotification = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
      setData(data?.notifications);
     
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    getNotification();
  }, [currentPage]);

  return { loading, data, pagination };
};

export { useUsers,useGetNotification };
