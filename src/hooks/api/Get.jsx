import { useState, useEffect } from "react";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1, datefilter, search, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${url}?from=${datefilter?.startDate}&to=${datefilter?.endDate}&query=${search}&page=${currentPage}`
      );
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
  }, [currentPage, update]);

  return { loading, data, pagination };
};

const useGraph = (url, datefilter, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getGraph = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${url}?from=${datefilter?.startDate}&to=${datefilter?.endDate}`
      );
      setData(data?.data);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGraph();
  }, [update]);

  return { loading, data };
};

const useGetNotification = (url, datefilter, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getNotification = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}?from=${datefilter?.startDate}&to=${datefilter?.endDate}`
      );
      setData(data?.notifications);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotification();
  }, [update]);

  return { loading, data };
};

const useGetSuccess = (url, currentPage = 1, datefilter, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});
  const getSuccess = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${url}?from=${datefilter?.startDate}&to=${datefilter?.endDate}&page=${currentPage}`
      );
      setData(data);
      setPagination({
        currentPages: data?.pagination?.currentPage,
        totalPages: data?.pagination?.totalPages,
        totalUsers: data?.pagination?.totalUsers,
      });
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuccess();
  }, [currentPage, update]);

  return { loading, data, pagination };
};
const useUserDetails = (url, id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/${id}`);
      setData(data?.data);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return { loading, data };
};

export {
  useUsers,
  useGetNotification,
  useGraph,
  useUserDetails,
  useGetSuccess,
};
