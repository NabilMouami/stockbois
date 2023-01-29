import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import { useSelector } from "react-redux";
import Select from "react-select";

import axios from "axios";
const Calendar = () => {
  const load = useSelector((state) => state.Clients.clients);
  const user = useSelector((state)=> state.userSignin.userInfo);
  const {id} = user;
  const [currentEvents, setCurrentEvents] = useState([]);
  const [notice, setNotice] = useState("");
  const [idClient, setIdClient] = useState("");
  console.log(currentEvents[currentEvents.length - 1]?.startStr);

  const selOptionClient = [];
  const ids = load.map((o) => o.name);
  const filtered = load.filter(
    ({ name }, index) => !ids.includes(name, index + 1)
  );

  for (var i = 0; i < filtered.length; i++) {
    var obj = {};
    if (filtered.length > 0) {
      obj["id"] = filtered[i].id;
      obj["name"] = filtered[i].name;
      obj["value"] = filtered[i].name;
      obj["label"] = filtered[i].name;
    }
    selOptionClient.push(obj);
  }
  const handleOptionClient = (e) => {
    setIdClient(e.id);
  };
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    setNotice(title);
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      PostData();
    }
  };
  const hamid = {
    cli_id: idClient,
    usr_id: id,
    dateCalendar: currentEvents[currentEvents.length - 1]?.startStr,
    notice: notice,
  };
  const PostData = () => {
    axios
      .post("http://localhost:8080/api/v1/createcalendar", hamid)
      .then(() => {
        console.log("Calendar Added!!");
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="flex flex-col" style={{marginLeft: "20px"}}>
        <label htmlFor="dueDate">Client Chargement:</label>

        <Select
          className="selOptions"
          options={selOptionClient}
          onChange={handleOptionClient}
          isSearchable={true}
        />
      </div>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between">
          {/* CALENDAR SIDEBAR */}
          <Box
            flex="1 1 20%"
            backgroundColor="#1F2A40"
            p="15px"
            borderRadius="4px"
          >
            <Typography variant="h5">Chargements:</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: "#4cceac",
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  {console.log(
                    formatDate(event.start, {
                      day: "numeric",
                      year: "numeric",
                      month: "numeric",
                    })
                  )}

                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* CALENDAR */}
          <Box flex="1 1 100%" ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "All-day event",
                  date: "2022-09-14",
                },
                {
                  id: "5123",
                  title: "Timed event",
                  date: "2022-09-28",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Calendar;
