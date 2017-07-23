echo "========================================="
echo "======= JASMINE ======="
echo "========================================="
(date | select Minute,Second,Millisecond | format-table); npm run jasmine; (date | select Minute,Second,Millisecond | format-table);

echo "========================================="
echo "======= MOCHA ======="
echo "========================================="
(date | select Minute,Second,Millisecond | format-table); npm run mocha; (date | select Minute,Second,Millisecond | format-table);

echo "========================================="
echo "======= JEST ======="
echo "========================================="
(date | select Minute,Second,Millisecond | format-table); npm run jest; (date | select Minute,Second,Millisecond | format-table);
