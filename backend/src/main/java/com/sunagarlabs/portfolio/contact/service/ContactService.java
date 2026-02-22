package com.sunagarlabs.portfolio.contact.service;

import com.sunagarlabs.portfolio.contact.dto.ContactResponse;
import com.sunagarlabs.portfolio.contact.dto.CreateContactRequest;

public interface ContactService {

    ContactResponse createContact(CreateContactRequest request);
}
