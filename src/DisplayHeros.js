import React from "react";
import { getDictionaryMeaning } from "./api";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Select } from "@blueprintjs/select";
import { Button, MenuItem } from "@blueprintjs/core";

export const DisplayHeros = (props) => {
  const [members, setMembers] = React.useState("");
  const [superPower, setSuperPower] = React.useState("");

  React.useLayoutEffect(() => {
    async function getHeros() {
      try {
        const response = await getDictionaryMeaning(props.user);
        return setMembers(response?.members);
      } catch (e) {
        return setMembers(null);
      }
    }

    getHeros();
  }, [props.user]);

  const getHerosElements = !!members ? (
    members.map((hero) => (
      <>
        <div key={hero.name}>
          <span> Heros Identity - {hero.secretIdentity} </span>
          <div style={{ display: "inline-block", marginLeft: "5%" }}>
            <label> Powers </label>
            <Select
              items={hero.powers}
              itemRenderer={(item, { modifiers, handleClick }) => (
                <MenuItem
                  active={modifiers.active}
                  key={item}
                  onClick={handleClick}
                  text={item}
                  shouldDismissPopover={false}
                />
              )}
              onItemSelect={(selectedItem) =>
                setSuperPower((prevState) => ({
                  ...prevState,
                  [hero.name]: selectedItem
                }))
              }
              popoverProps={{ minimal: true }}
              filterable={false}
            >
              {/* children become the popover target; render value here */}
              <Button
                text={
                  superPower.hasOwnProperty(hero.name)
                    ? superPower[hero.name]
                    : "Select"
                }
                rightIcon="caret-down"
              />
            </Select>
          </div>
        </div>

        <div>
          <ul className="list">
            {hero.powers.map((power) => (
              <li>{power}</li>
            ))}
          </ul>
        </div>

        <div>
          <label>HTML select</label>
          <select>
            {hero.powers.map((power) => (
              <option>{power}</option>
            ))}
          </select>
        </div>

        <div class="table">
          <table>
            <tr>
              <th>Name:</th>
              <td>{hero.secretIdentity}</td>
            </tr>
            <tr>
              <th rowspan={hero.powers.length + 1}>Powers:</th>
            </tr>
            {hero.powers.map((power) => (
              <tr>
                <td> {power}</td>
              </tr>
            ))}
          </table>
        </div>
      </>
    ))
  ) : (
    <div> No data </div>
  );

  return getHerosElements;
};
