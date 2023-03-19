import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddEdit.css";

const AddEdit = () => {
  const [status, addsetStatus] = useState("");
  const [statuses, updatesetStatus] = useState("");
  const [repoName, addsetRepoName] = useState("");
  const [repoNames, updatesetsRepoName] = useState("");
  const [queuedAt, addsetQueuedAt] = useState("");
  const [queuedAts, updatesetQueuedAt] = useState("");
  const [scanningAt, addsetscanningAt] = useState("");
  const [scanningAts, updatesetscanningAt] = useState("");
  const [finishedAt, addsetFinishedAt] = useState("");
  const [finishedAts, updatesetFinishedAt] = useState("");
  const [type, addsettype] = useState("");
  const [types, updatesettype] = useState("");
  const [ruleId, addsetRuleId] = useState("");
  const [ruleIds, updatesetRuleId] = useState("");
  const [path, addsetPath] = useState("");
  const [paths, updatesetPath] = useState("");
  const [line, addsetLine] = useState("");
  const [lines, updatesetLine] = useState("");
  const [description, addsetDescription] = useState("");
  const [descriptions, updatesetDescription] = useState("");
  const [severity, addsetSeverity] = useState("");
  const [severitys, updatesetSeverity] = useState("");
  const [data, setData] = useState([]);

  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setData(response.data.data);
    const temp = JSON.parse(JSON.stringify(response.data.data));

    for (let i = 0; i < temp.length; i++) {
      if (id === temp[i]["_id"]) updatesetsRepoName(temp[i]["repositoryName"]);
      updatesetQueuedAt(temp[i]["queuedAt"]);
      updatesetPath(temp[i]["path"]);
      updatesetStatus(temp[i]["Status"]);
      updatesetLine(temp[i]["line"]);
      updatesetFinishedAt(temp[i]["finishedAt"]);
      updatesetDescription(temp[i]["description"]);
      updatesetRuleId(temp[i]["ruleID"]);
      updatesetSeverity(temp[i]["severity"]);
      updatesetscanningAt(temp[i]["scanningAt"]);
      updatesettype(temp[i]["type"]);
    }
    if (response.status === 201) {
      setData(response.data.data);
    }
  };

  const addUser = async () => {
    const response = await axios.post("http://localhost:8080/user", {
      Status: status,
      repositoryName: repoName,
      type: type,
      ruleID: ruleId,
      path: path,
      line: line,
      description: description,
      severity: severity,
      queuedAt: queuedAt,
      scanningAt: scanningAt,
      finishedAt: finishedAt,
    });
    if (response.status === 201) {
      toast.success(response.data);
      addsetRepoName("");
    }
  };
  const setValueData = (event, func) => {
    func(event.target.value);
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:8080/user/${id}`, data);
    if (response.status === 201) {
      toast.success(response.data.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addUser();
    } else {
      updateUser(
        {
          Status: statuses,
          type: types,
          repositoryName: repoNames,
          ruleID: ruleIds,
          path: paths,
          line: lines,
          description: descriptions,
          severity: severitys,
          queuedAt: queuedAts,
          scanningAt: scanningAts,
          finishedAt: finishedAts,
        },
        id
      );
    }
    history("/home");
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <table>
          <tr>
            <td>
              <label htmlFor="name">Repository Name</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? repoNames : repoName}
                placeholder="Enter Repository Name"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetsRepoName)
                    : setValueData(e, addsetRepoName);
                }}
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="scanType">Status</label>
            </td>
            <td>
              <select
                name="status"
                id="scanType"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetStatus)
                    : setValueData(e, addsetStatus);
                }}
                value={id ? statuses : status}
              >
                <option>Status </option>
                <option>Queued</option>
                <option>In Progress</option>
                <option>Success</option>
                <option>Failure</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="queuedAt">QueuedAt</label>
            </td>
            <td>
              <input
                type="date"
                value={id ? queuedAts : queuedAt}
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetQueuedAt)
                    : setValueData(e, addsetQueuedAt);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="scanningAt">ScanningAt</label>
            </td>
            <td>
              <input
                type="date"
                value={id ? scanningAts : scanningAt}
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetscanningAt)
                    : setValueData(e, addsetscanningAt);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="finishedAt">FinishedAt</label>
            </td>
            <td>
              <input
                type="date"
                value={id ? finishedAts : finishedAt}
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetFinishedAt)
                    : setValueData(e, addsetFinishedAt);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="type">Type</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? types : type}
                placeholder="Enter type"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesettype)
                    : setValueData(e, addsettype);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="ruleID">Rule ID</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? ruleIds : ruleId}
                placeholder="Enter Rule ID"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetRuleId)
                    : setValueData(e, addsetRuleId);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="path">Path</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? paths : path}
                placeholder="Enter Path"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetPath)
                    : setValueData(e, addsetPath);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <label htmlFor="line">Line</label>
            </td>
            <td>
              <input
                type="number"
                value={id ? lines : line}
                placeholder="Enter Line"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetLine)
                    : setValueData(e, addsetLine);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <label htmlFor="description">Description</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? descriptions : description}
                placeholder="Enter Description"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetDescription)
                    : setValueData(e, addsetDescription);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="severity">Severity</label>
            </td>
            <td>
              <input
                type="text"
                value={id ? severitys : severity}
                placeholder="Enter Severity"
                onChange={(e) => {
                  id
                    ? setValueData(e, updatesetSeverity)
                    : setValueData(e, addsetSeverity);
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              {" "}
              <input type="submit" value={id ? "Update" : "Add"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default AddEdit;
