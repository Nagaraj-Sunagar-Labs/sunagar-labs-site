package com.sunagarlabs.portfolio.contact.dto;

import java.time.Instant;
import java.util.UUID;
import lombok.Builder;

@Builder
public record ContactResponse(
        UUID id,
        String name,
        String email,
        String message,
        Instant createdAt
) {
}
