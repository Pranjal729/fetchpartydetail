import { useState } from 'react';
import { TextField, Autocomplete, Button, Card, CardContent, Typography } from '@mui/material';
import partiesData from './data.json';
import balanceData from './balancedata.json';

const PartySearch = () => {
  const [selectedParty, setSelectedParty] = useState(null);
  const [balance, setBalance] = useState(null);

  const handlePartySelect = (event, newValue) => {
    if (newValue) {
      setSelectedParty(newValue);
      const selectedBalance = balanceData.find((item) => item.id === newValue.id);
      setBalance(selectedBalance);
    } else {
      setSelectedParty(null);
      setBalance(null);
    }
  };

  return (
    <div>
      <Autocomplete
        options={partiesData}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Party Search" />}
        onChange={handlePartySelect}
      />

      {selectedParty && (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedParty.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedParty.address}, {selectedParty.city}, {selectedParty.pincode}
            </Typography>
            {balance && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Current Balance: {balance.balance}
              </Typography>
            )}
          </CardContent>
        </Card>
      )}

      
    </div>
  );
};

export default PartySearch;
