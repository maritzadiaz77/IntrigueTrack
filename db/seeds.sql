INSERT INTO department (name)
VALUES ("Marketing"),
       ("HR"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 100000, 1),
('Accounting Staff', 70000, 3),
('Accounting Manager', 150000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Test', 1, NULL),
('Lina', 'James', 2, 1 );
       
