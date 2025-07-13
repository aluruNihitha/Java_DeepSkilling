package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.util.List;

@Service
public class CountryService {

    public Country getCountry(String code) {
        try {
            JAXBContext context = JAXBContext.newInstance(CountryList.class);
            Unmarshaller unmarshaller = context.createUnmarshaller();
            CountryList countryList = (CountryList) unmarshaller.unmarshal(
                new ClassPathResource("country.xml").getInputStream()
            );
            List<Country> countries = countryList.getCountryList();

            return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
        } catch (Exception e) {
            throw new RuntimeException("Error reading country.xml", e);
        }
    }
}