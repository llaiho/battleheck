import React, { FC } from "react";
import { TextField, Card, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import { MyField } from "./MyField";
import { values } from "mobx";
import { Skill } from '../interfaces/Skill';
import { SkillShow, SkillEdit } from "./Skill";






