import React from "react";
import { TranfserableSkeleton } from "../../global/Skeleton";

const TransferableSkill = ({ transferableSkill, skillsLoader }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-8">
      {skillsLoader ? (
        <TranfserableSkeleton />
      ) : (
        <>
          {/* Sport Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sport:{" "}
              <span className="font-semibold ">
                {transferableSkill?.athlete?.primary_sport?.sport_name}
              </span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Position:{" "}
              <span className="font-medium text-gray-600">
                {transferableSkill?.athlete?.sport_position?.position_name}
              </span>
            </h3>
            <ol className="list-decimal ml-6 space-y-3">
              {transferableSkill?.athlete?.sport_position?.topics?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {item?.title}
                    <p className="ml-4 font-normal text-gray-600 text-base mt-1">
                      {item?.description}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Military Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Military:{" "}
              <span className="font-semibold ">
                {transferableSkill?.military?.branch_of_service?.service_name}
              </span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Position:{" "}
              <span className="font-medium text-gray-600">
                {transferableSkill?.military?.rank?.rank_name}
              </span>
            </h3>
            <ol className="list-decimal ml-6 space-y-3">
              {transferableSkill?.military?.rank?.topics?.map((item, index) => (
                <li key={index} className="text-lg font-semibold text-gray-800">
                  {item?.title}
                  <p className="ml-4 font-normal text-gray-600 text-base mt-1">
                    {item?.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Subject Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Favorite Subject:{" "}
              <span className="font-semibold ">
                {
                  transferableSkill?.favorite_middle_school_subject
                    ?.subject_name
                }
              </span>
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              {transferableSkill?.favorite_middle_school_subject?.topics?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {item?.title}
                    <p className="ml-4 font-normal text-gray-600 text-base mt-1">
                      {item?.description}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Hobby 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Favorite Hobby:{" "}
              <span className="font-semibold ">
                {transferableSkill?.favorite_hobby1?.hobbie_name}
              </span>
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              {transferableSkill?.favorite_hobby1?.topics?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {item?.title}
                    <p className="ml-4 font-normal text-gray-600 text-base mt-1">
                      {item?.description}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Hobby 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Favorite Hobby 2:{" "}
              <span className="font-semibold ">
                {transferableSkill?.favorite_hobby2?.hobbie_name}
              </span>
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              {transferableSkill?.favorite_hobby2?.topics?.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {item?.title}
                    <p className="ml-4 font-normal text-gray-600 text-base mt-1">
                      {item?.description}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>
        </>
      )}
    </div>
  );
};

export default TransferableSkill;
