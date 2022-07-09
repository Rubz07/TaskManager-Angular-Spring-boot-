DROP SCHEMA IF EXISTS `myTaskManager`;

CREATE SCHEMA `myTaskManager`;
USE `myTaskManager` ;


CREATE TABLE IF NOT EXISTS `myTaskManager`.`tbl_task` (
  `task_id` INT(20) NOT NULL AUTO_INCREMENT,
  `task_title` VARCHAR(255) DEFAULT NULL,
    `task_description` VARCHAR(255) DEFAULT NULL,
        `task_status` VARCHAR(255) DEFAULT NULL,
        `task_due_date` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`task_id`))

AUTO_INCREMENT = 1;

INSERT INTO tbl_task(task_title,task_description,task_status,task_due_date) VALUES ('Drink Water','Drinking Water is healthier','pending',now());
INSERT INTO tbl_task(task_title,task_description,task_status,task_due_date) VALUES ('drink tea','Drinking tea is healthier','pending',now());